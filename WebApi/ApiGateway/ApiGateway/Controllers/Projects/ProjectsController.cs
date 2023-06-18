using ApiGateway.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

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
            var result = await _httpClient.GetAsync($"https://checkit-project-manager.up.railway.app/api/Projects/{id}");
            var projectResult = await result.Content.ReadAsStringAsync();

            return projectResult is null ? NotFound() : Ok(projectResult);
        }

        [HttpPost()]
        public async Task<IActionResult> PostProject([FromBody] Project project)
        {
            // Get UserId
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            project.UserId = userId;

            var result = await _httpClient.PostAsJsonAsync($"https://checkit-project-manager.up.railway.app/api/Projects", project);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject([FromRoute] string id, [FromBody] Project project)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            project.UserId = userId;

            var result = await _httpClient.PutAsJsonAsync($"https://checkit-project-manager.up.railway.app/api/Projects/{id}", project);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject([FromRoute] string id)
        {
            await _httpClient.DeleteAsync($"https://checkit-project-manager.up.railway.app/api/Projects/{id}");

            return Ok();
        }

        // Retorna os Ids das Tarefas de um projeto
        [HttpGet("GetTaskFromProject/{id}")]
        public async Task<IActionResult> GetTaskFromProject([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://checkit-project-manager.up.railway.app/api/Projects/GetTaskFromProject/{id}");
            var data = await result.Content.ReadAsStringAsync();

            return Ok(data);
        }
    }
}
