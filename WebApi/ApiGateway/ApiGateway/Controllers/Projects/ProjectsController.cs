using ApiGateway.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace ApiGateway.Controllers.Projects
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public ProjectsController()
        {
            _httpClient = new HttpClient();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://localhost:7152/api/Projects/{id}");
            var projectResult = await result.Content.ReadAsStringAsync();

            return projectResult is null ? NotFound() : Ok(projectResult);
        }                      

        [HttpPost()]
        public async Task<IActionResult> PostProject([FromBody] Project project)
        {
            var result = await _httpClient.PostAsJsonAsync($"https://localhost:7152/api/Projects", project);

            return Ok(result);
        }
      
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject([FromRoute] string id, [FromBody] Project project)
        {           
            var result = await _httpClient.PutAsJsonAsync($"https://localhost:7152/api/Projects/{id}", project);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject([FromRoute] string id)
        {
            await _httpClient.DeleteAsync($"https://localhost:7152/api/Projects/{id}");

            return Ok();
        }
    }
}
