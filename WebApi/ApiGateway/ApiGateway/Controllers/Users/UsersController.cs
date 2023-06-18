﻿using ApiGateway.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ApiGateway.Controllers.Users
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public UsersController()
        {
            _httpClient = new HttpClient();
        }
        [AllowAnonymous]

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://checkit-users-production.up.railway.app/api/Users/{id}");
            var userResult = await result.Content.ReadAsStringAsync();            

            return userResult is null ? NotFound() : Ok(userResult);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> PostUser([FromBody] User user)
        {

            var result = await _httpClient.PostAsJsonAsync($"https://checkit-users-production.up.railway.app/api/Users", user);
    
           


            return result.ReasonPhrase=="Bad Request"?BadRequest() : Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser([FromBody] User user, [FromRoute] string id)
        {
            var result = await _httpClient.PutAsJsonAsync($"https://checkit-users-production.up.railway.app/api/Users/{id}", user);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] string id)
        {
            await _httpClient.DeleteAsync($"https://checkit-users-production.up.railway.app/api/Users/{id}");

            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] Authenticate login)
        {
             var result = await _httpClient.PostAsJsonAsync($"https://checkit-users-production.up.railway.app/api/Users/authenticate", login);          
            // var result = await _httpClient.PostAsJsonAsync($"https://localhost:7295/api/users/authenticate", login);         


            var resultJson = await result.Content.ReadAsStringAsync(); // Token
            Console.WriteLine(resultJson);

            return Ok(resultJson);
        }
    }
}

