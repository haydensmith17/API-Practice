using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace apiPractice.models
{
    public class BoardAccessories
    {
        public int AccessoryId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Manufacturer { get; set; }
        [JsonIgnore]
        public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();
    }
}