namespace Tasks.Models
{
    public class TarefasDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string TarefasCollectionName { get; set; } = null!;
    }
}
