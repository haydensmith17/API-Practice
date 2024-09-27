using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiPractice.models;
public partial class Cart
{
    public int CartID { get; set; }
    public int Personid { get; set; }
    public int Id { get; set; }
    public DateTime? CreatedOn { get; set; }
    public DateTime? UpdatedOn { get; set; }
    public virtual BoardInfo? BoardInfo { get; set; }  // Adjust the navigation property name
    public virtual UserPersons? UserPersons { get; set; }
}