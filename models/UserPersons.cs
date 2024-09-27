using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiPractice.models;
    public partial class UserPersons
    {
        public int Personid { get; set; }
        public string Lastname { get; set; }
        public string Firstname { get; set; }
        public string Address { get; set; }
        public string? City { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();
    }