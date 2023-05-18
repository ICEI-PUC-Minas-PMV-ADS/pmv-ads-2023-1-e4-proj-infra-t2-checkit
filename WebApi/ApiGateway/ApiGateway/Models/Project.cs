using System.Diagnostics.Metrics;

namespace ApiGateway.Models
{
    public class Project
    {
        public string Title { get; set; }        
        public DateTime DueDate { get; set; }
        public string Status { get; set; }
        public List<string?> TarefaId { get; set; }
        public string UserId { get; set; }
    }
}
