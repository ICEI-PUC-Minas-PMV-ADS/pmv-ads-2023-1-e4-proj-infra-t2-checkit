using ApiGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace ApiGateway.Controllers.Projects
{
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
        public async Task<IActionResult> GetProject([FromRoute]string id)
        {
           var result = await _httpClient.GetAsync($"https://localhost:7152/api/Projects/{id}");

            return Ok(result);
        }
        [HttpPost()]

        public async Task<IActionResult> PostProject([FromBody] Project project)
        {
            if(project == null)
            {
                return BadRequest();
            }
        
            var projeto = await _httpClient.PostAsJsonAsync($"https://localhost:7152/api/Projects", project);

            return Ok(projeto);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject([FromRoute] Project project)
        {
            if (project == null) return BadRequest();

            var projeto = await _httpClient.PutAsJsonAsync($"https://localhost:7152/api/Projects", project);


            return Ok(projeto);

        } 
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject([FromRoute] string id)
        {
            
            await _httpClient.DeleteAsync($"https://localhost:7152/api/Projects/{id}");

            return Ok();

        }
    }
}
