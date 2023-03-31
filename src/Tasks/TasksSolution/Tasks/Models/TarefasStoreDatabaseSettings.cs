namespace Tasks.Models
{
    public class TarefasStoreDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string TarefasCollectionName { get; set; } = null!;
    }
}
