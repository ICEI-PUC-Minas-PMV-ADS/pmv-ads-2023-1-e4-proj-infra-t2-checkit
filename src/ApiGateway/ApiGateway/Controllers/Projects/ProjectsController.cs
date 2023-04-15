using ApiGateway.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
            string json = JsonConvert.SerializeObject(project);
            StringContent content = new StringContent(json, Encoding.UTF8, "application/json");
        
            var p1 = await _httpClient.PostAsync($"https://localhost:7152/api/Projects", content);

            return Ok(p1);
        }
    }
}
