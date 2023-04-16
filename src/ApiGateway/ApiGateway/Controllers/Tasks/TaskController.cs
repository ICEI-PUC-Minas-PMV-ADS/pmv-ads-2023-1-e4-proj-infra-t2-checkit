using ApiGateway.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiGateway.Controllers.Tasks
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public TaskController()
        {
            _httpClient = new HttpClient();
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetTask([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://localhost:7246/api/Tarefas/{id}");

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostTask([FromBody] Task tarefa)
        {
            var result = await _httpClient.PostAsJsonAsync($"https://localhost:7246/api/Tarefas", tarefa);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask([FromBody] Task tarefa, [FromRoute] string id)
        {
            // Password vindo na request, acertar
            var result = await _httpClient.PutAsJsonAsync($"https://localhost:7246/api/Tarefas{id}", tarefa);

            return Ok(result);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject([FromRoute] string id)
        {
            await _httpClient.DeleteAsync($"https://localhost:7246/api/Tarefas/{id}");

            return Ok();
        }




















    }
}
