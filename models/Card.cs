using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiPractice.models
{
    public class Card
    {
        public int? CardID { get; set; }
        public int Personid { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string CardNumber { get; set; }
        public string ExpDate { get; set; }
        public int CVV { get; set; }
        public virtual UserPersons? UserPersons { get; set; }
    }
}