using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Users.Models;

namespace Users.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _usersCollection;

        public UserService(IOptions<UserDatabaseSettings> UserDatabaseSettings)
        {
            var mongoClient = new MongoClient(UserDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(UserDatabaseSettings.Value.DatabaseName);
            _usersCollection = mongoDatabase.GetCollection<User>(UserDatabaseSettings.Value.UsersCollectionName);
        }

        // Get
        public async Task<List<User>> GetAllAsync() =>
            await _usersCollection.Find(_ => true).ToListAsync();

        public async Task<User> GetByIdAsync(string id) =>
            await _usersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Get Authenticate
        public async Task<User> GetByEmailAsync(string email) =>
            await _usersCollection.Find(x => x.Email == email).FirstOrDefaultAsync();

        // Post
        public async Task CreateAsync(User newUser) =>
            await _usersCollection.InsertOneAsync(newUser);

        // Put
        public async Task UpdateAsync(string id, User updatedUser) =>
            await _usersCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

        // Delete
        public async Task RemoveAsync(string id) =>
            await _usersCollection.DeleteOneAsync(x => x.Id == id);
    }
}
