using System.Diagnostics.Metrics;

namespace ApiGateway.Models
{
    public class Project
    {
        public string Title { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime DueDate { get; set; }
        public string Status { get; set; }
        public List<string?> TarefaId { get; set; } 
    }
}
