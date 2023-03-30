namespace ProjectManager.Models
{
    public class Member
    {
        public Member(in string id, in string personId, in string firstName, in string email, in string phone, in string lastName, in string password, in string document)
        {
            Id = id;
            LastName = lastName;
            Password = password;
        }

        public Member(in string firstName, in string email, in string phone, in string document, in string lastName, in string password)
        {
            Id = Guid.NewGuid().ToString();
            LastName = lastName;
            Password = password;
        }

        public Member() : base()
        {
        }

        public string? Id { get; set; }
        public string? LastName { get; set; }
        public string? Password { get; set; }
    }
}