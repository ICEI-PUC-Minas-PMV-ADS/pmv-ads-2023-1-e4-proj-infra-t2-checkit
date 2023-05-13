using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Users.Models;
using Users.Services;
using System;

namespace Users.Controllers
{
   // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userCollection;

        public UsersController(UserService userCollection) =>
             _userCollection = userCollection;

        //[Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<List<User>> GetAll()
        {
            return await _userCollection.GetAllAsync();
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> GetById(string id)
        {
            var userDb = await _userCollection.GetByIdAsync(id);

            if (userDb is null) return NotFound();

            return Ok(userDb);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Create(UserDto model)
        {
            User newUser = new()
            {
                Name = model.Name,
                Email = model.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
                Role = model.Role
            };

            await _userCollection.CreateAsync(newUser);

            return CreatedAtAction(nameof(GetById), new { id = newUser.Id }, newUser);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(UserDto model, string id)
        {
            if (model.Id != id) return BadRequest();

            var updatedUserDb = await _userCollection.GetByIdAsync(id);

            if (updatedUserDb is null) return NotFound();

            updatedUserDb.Name = model.Name;
            updatedUserDb.Email = model.Email;
            updatedUserDb.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
            updatedUserDb.Role = model.Role;

            await _userCollection.UpdateAsync(id, updatedUserDb);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var userDb = await _userCollection.GetByIdAsync(id);

            if (userDb is null) return NotFound();

            await _userCollection.RemoveAsync(id);

            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateDto model)
        {
            var userDb = await _userCollection.GetByEmailAsync(model.Email);          

            if (userDb is null ||
                !BCrypt.Net.BCrypt.Verify(model.Password, userDb.Password))
                return Unauthorized();

            var tokenService = new TokenService();
            var jwt = tokenService.GenerateJwtToken(userDb);

            return Ok(new { jwtToken = jwt });
        }
    }
}
