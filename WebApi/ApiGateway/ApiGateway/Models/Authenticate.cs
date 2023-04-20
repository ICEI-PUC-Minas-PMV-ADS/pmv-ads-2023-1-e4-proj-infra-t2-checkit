using System.ComponentModel.DataAnnotations;

namespace ApiGateway.Models
{
    public class Authenticate
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
