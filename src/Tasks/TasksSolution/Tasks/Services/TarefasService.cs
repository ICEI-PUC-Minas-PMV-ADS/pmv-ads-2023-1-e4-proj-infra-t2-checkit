using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Tasks.Models;

namespace Tasks.Services
{
    public class TarefasService
    {
        private readonly IMongoCollection<Tarefa> _tarefasCollection;

        public TarefasService(IOptions<TarefasStoreDatabaseSettings> tarefaStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(tarefaStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(tarefaStoreDatabaseSettings.Value.DatabaseName);

            _tarefasCollection = mongoDatabase.GetCollection<Tarefa>(tarefaStoreDatabaseSettings.Value.DatabaseName);



                }

        public async Task<List<Tarefa>> GetAllAsync() =>
            await _tarefasCollection.Find(_ => true).ToListAsync();


        public async Task<Tarefa> GetByIdAsync(string id) =>
             await _tarefasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Tarefa newTarefa) =>
            await _tarefasCollection.InsertOneAsync(newTarefa);


        public async Task UpdateAsync(string id, Tarefa updateTarefa) =>
            await _tarefasCollection.ReplaceOneAsync(x => x.Id == id,updateTarefa);


        public async Task RemoveAsync(string id) =>
            await _tarefasCollection.DeleteOneAsync(x => x.Id == id);
            






    }
}
