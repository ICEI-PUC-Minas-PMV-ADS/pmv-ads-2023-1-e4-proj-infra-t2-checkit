using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Profiles.Models;

namespace Profiles.Services
{
    public class ProfilesServices
    {
        private readonly IMongoCollection<Profile> _profilesCollection;

        public ProfilesServices(IOptions<ProfileDatabaseSettings> ProfileDatabaseSettings)
        {
            var mongoClient = new MongoClient(ProfileDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(ProfileDatabaseSettings.Value.DatabaseName);
            _profilesCollection = mongoDatabase.GetCollection<Profile>(ProfileDatabaseSettings.Value.ProfilesCollectionName);
        }              

        // Get
        public async Task<Profile> GetByIdAsync(string id) =>
            await _profilesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Post
        public async Task CreateAsync(Profile newProfile) =>
            await _profilesCollection.InsertOneAsync(newProfile);

        // Put
        public async Task UpdateAsync(string id, Profile updatedProfile) =>
            await _profilesCollection.ReplaceOneAsync(x => x.Id == id, updatedProfile);

        // Delete
        public async Task RemoveAsync(string id) =>
            await _profilesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
