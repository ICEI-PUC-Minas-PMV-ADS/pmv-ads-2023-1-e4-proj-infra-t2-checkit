using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ApiGateway.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
       // public Role Role { get; set; }
    }

    //public enum Role
    //{
    //    [Display(Name = "Admin")]
    //    Admin,
    //    [Display(Name = "User")]
    //    User,
    //}
}



