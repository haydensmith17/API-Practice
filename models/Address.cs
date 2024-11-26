using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiPractice.models
{
    public class Address
    {
        public int? AddressID { get; set; }
        public int Personid { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string StateOrigin { get; set; }
        public string ZIP { get; set; }
        public string Country { get; set; }
        public virtual UserPersons? UserPersons { get; set; }
    }
}