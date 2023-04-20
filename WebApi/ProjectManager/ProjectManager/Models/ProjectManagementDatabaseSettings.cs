namespace ProjectManager.Models
{
    public class ProjectManagementDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string ProjectManagementName { get; set; } = null!;
    }
}
