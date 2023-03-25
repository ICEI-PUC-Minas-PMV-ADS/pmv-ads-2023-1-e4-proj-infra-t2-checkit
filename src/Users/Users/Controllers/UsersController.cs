using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Users.Models;

namespace Users.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Users.ToListAsync();

            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(UserDto model)
        {
            User newUser = new User()
            {
                Name = model.Name,
                Email = model.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
                Role = model.Role
            };

            _context.Add(newUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = newUser.Id }, newUser );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Users.FindAsync(id);

            if (model == null) return NotFound();

            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(UserDto model, int id)
        {
            if (id != model.Id) return BadRequest();

            var modelDb = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id);

            if (modelDb == null) return NotFound();

            modelDb.Name = model.Name;
            modelDb.Email = model.Email;
            modelDb.Password = BCrypt.Net.BCrypt.HashPassword(model.Password); 
            modelDb.Role = model.Role; 

            _context.Update(modelDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Users.FindAsync(id);
                
            if (model == null) return NotFound();

            _context.Users.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
