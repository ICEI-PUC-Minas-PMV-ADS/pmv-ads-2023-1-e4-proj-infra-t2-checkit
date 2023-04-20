using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Task_ProjectHistory.Models;

namespace Task_ProjectHistory.Services
{
    public class HistoricServices
    {
        private readonly IMongoCollection<Historic> _historicsCollection;

        public HistoricServices(IOptions<HistoricDatabaseSettings> historicDatabaseSettings)
        {
            var mongoClient = new MongoClient(historicDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(historicDatabaseSettings.Value.DatabaseName);
            _historicsCollection = mongoDatabase.GetCollection<Historic>(historicDatabaseSettings.Value.HistoricCollectionName);
        }

        public async Task<List<Historic>> GetAllAsync() =>
            await _historicsCollection.Find(_ => true).ToListAsync();

        public async Task<Historic> GetByIdAsync(string id) =>
             await _historicsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Historic newHistoric) =>
            await _historicsCollection.InsertOneAsync(newHistoric);

        public async Task UpdateAsync(string id, Historic updateHistoric) =>
            await _historicsCollection.ReplaceOneAsync(x => x.Id == id, updateHistoric);

        public async Task RemoveAsync(string id) =>
            await _historicsCollection.DeleteOneAsync(x => x.Id == id);



    }
}
