﻿using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Tasks.Models;

namespace Tasks.Services
{
    public class TarefasService
    {          
        private readonly IMongoCollection<Tarefa> _tarefasCollection;

        public TarefasService(IOptions<TarefasDatabaseSettings> tarefaDatabaseSettings)
        {
            var mongoClient = new MongoClient(tarefaDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(tarefaDatabaseSettings.Value.DatabaseName);
            _tarefasCollection = mongoDatabase.GetCollection<Tarefa>(tarefaDatabaseSettings.Value.TarefasCollectionName);
        }

        public async Task<List<Tarefa>> GetAllAsync() =>
            await _tarefasCollection.Find(_ => true).ToListAsync();

        //Método para pegar todas as tarefas com a Id de projeto passadas
        //public async Task<List<Tarefa>> GetAllIdProjectInTasks(string id) =>
        //    await _tarefasCollection.Find(x => x.ProjectId == id).ToListAsync();

        public async Task<Tarefa> GetByIdAsync(string id) =>
             await _tarefasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Tarefa newTarefa) =>
            await _tarefasCollection.InsertOneAsync(newTarefa);

        public async Task UpdateAsync(string id, Tarefa updateTarefa) =>
            await _tarefasCollection.ReplaceOneAsync(x => x.Id == id, updateTarefa);

        public async Task RemoveAsync(string id) =>
            await _tarefasCollection.DeleteOneAsync(x => x.Id == id);

    }
}
