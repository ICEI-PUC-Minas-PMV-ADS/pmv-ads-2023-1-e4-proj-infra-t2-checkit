using ApiGateway.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiGateway.Controllers.Users
{
    // Terminar: autenticação/autorização
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public UsersController()
        {
            _httpClient = new HttpClient();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://localhost:7295/api/Users/{id}");

            return Ok(result);
        }

        [HttpPost()]
        public async Task<IActionResult> PostProject([FromBody] User user)
        {      
            var result = await _httpClient.PostAsJsonAsync($"https://localhost:7295/api/Users", user);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject([FromBody] User user, [FromRoute] string id)
        {            
            // Password vindo na request, acertar
            var result = await _httpClient.PutAsJsonAsync($"https://localhost:7295/api/Users/{id}", user);

            return Ok(result);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject([FromRoute] string id)
        {
            await _httpClient.DeleteAsync($"https://localhost:7295/api/Users/{id}");

            return Ok();
        }
    }
}
