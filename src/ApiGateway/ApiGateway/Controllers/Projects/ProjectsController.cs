using Microsoft.AspNetCore.Mvc;

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
    }
}
