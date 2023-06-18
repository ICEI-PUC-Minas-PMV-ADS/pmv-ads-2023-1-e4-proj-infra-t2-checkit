namespace Task_ProjectHistory.Models
{
    public class HistoricDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string HistoricCollectionName { get; set; } = null!;
    }
}