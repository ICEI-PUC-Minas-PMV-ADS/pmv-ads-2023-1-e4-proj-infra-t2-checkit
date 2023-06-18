using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ProjectManager.Models;

namespace ProjectManager.Services.Projects
{
    public class ProjectService : IProjectService
    {
        private readonly IMongoCollection<Project> _projectsCollection;

        public ProjectService()
        {
            var mongoClient = new MongoClient(
               Environment.GetEnvironmentVariable("MONGODB_CONNECTIONSTRING"));

            var mongoDatabase = mongoClient.GetDatabase(
                Environment.GetEnvironmentVariable("MONGODB_DATABASENAME"));

            _projectsCollection = mongoDatabase.GetCollection<Project>(
                Environment.GetEnvironmentVariable("MONGODB_PROJECTMANAGEMENTNAME"));
        }       

        public async Task Register(Project project)
        {
            await _projectsCollection.InsertOneAsync(project);
        }

        public async Task<List<Project>> GetAllAsync(string userId) =>
           await _projectsCollection.Find(x => x.UserId == userId).ToListAsync();

        public async Task<Project> Get(string id)
        {
            return await _projectsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }

       /* public async Task<Project> GetAllAsync() =>
          await _projectsCollection.Find(_ => true).ToListAsync();*/

        public async Task Update(string id, Project project)
        {
            await _projectsCollection.ReplaceOneAsync(x => x.Id == id, project);
        }

        public async Task Delete(string id)
        {
            await _projectsCollection.DeleteOneAsync(x => x.Id == id);
        }
    }
}
