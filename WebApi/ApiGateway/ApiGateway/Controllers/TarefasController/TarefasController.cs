using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Tasks.Models;

namespace ApiGateway.Controllers.TarefasCosntroller
{
  /*  [Authorize]*/
    [Route("api/[controller]")]
    [ApiController]
    public class TarefasController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public TarefasController()
        {
            _httpClient = new HttpClient();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTarefaById([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://localhost:7246/api/Tarefas/{id}");

            var convertion = await result.Content.ReadAsStringAsync();
            //Teste de conversão da string para JSON ser enviado na resposta
            return Ok(convertion);
        }

        [HttpPost()]
        public async Task<IActionResult> PostTarefa([FromBody] Tarefa tarefa)
        {
            var result = await _httpClient.PostAsJsonAsync($"https://localhost:7246/api/Tarefas", tarefa);
 
            return Ok(result);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTarefa([FromRoute] string id, [FromBody] Tarefa tarefa)
        {
            var result = await _httpClient.PutAsJsonAsync($"https://localhost:7246/api/Tarefas/{id}", tarefa);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarefa([FromRoute] string id)
        {
            await _httpClient.DeleteAsync($"https://localhost:7246/api/Tarefas/{id}");

            return Ok();
        }


        [HttpGet("getTaskProject/{id}")]
        public async Task<IActionResult> GetTaskFromProject([FromRoute] string id)
        {
            var result = await _httpClient.GetAsync($"https://localhost:7246/api/tarefas/getTaskProject/{id}");
            //var a = await result.Content.ReadAsStringAsync();

            // Console.WriteLine(a);


            return Ok(result);
        }
    }
}
