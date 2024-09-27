using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace apiPractice.models;
    public class BoardInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Size { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string Manufacturer { get; set; }
        public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();
    }