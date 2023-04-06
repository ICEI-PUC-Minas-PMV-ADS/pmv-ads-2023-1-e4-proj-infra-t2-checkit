using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Task_ProjectHistory.Services;
using Task_ProjectHistory.Models;

namespace Task_ProjectHistory.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class HistoricController:ControllerBase
    {
        private readonly HistoricServices _historicCollection;

        public HistoricController(HistoricServices tarefasCollection) =>
            _historicCollection = tarefasCollection;


        [Authorize(Roles ="Admin")]
        [HttpGet]

        public async Task<List<Historic>> GetAll()
        {
            return await _historicCollection.GetAllAsync();
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Historic>> Get(string id)
        {
            var tarefa = await _historicCollection.GetByIdAsync(id);

            if (tarefa is null) return NotFound();

            return tarefa;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Historic newHistoric)
        {
            await _historicCollection.CreateAsync(newHistoric);

            return CreatedAtAction(nameof(Get), new { id = newHistoric.Id }, newHistoric);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Historic updateTarefa)
        {
            var tarefa = await _historicCollection.GetByIdAsync(id);

            if (tarefa is null) return NotFound();

            updateTarefa.Id = tarefa.Id;

            await _historicCollection.UpdateAsync(id, updateTarefa);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var tarefaDB = await _historicCollection.GetByIdAsync(id);

            if (tarefaDB is null) return NotFound();

            await _historicCollection.RemoveAsync(id);

            return NoContent();
        }
    }
}
