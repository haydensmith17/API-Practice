using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;

namespace apiPractice.services
{
    public class CartService
    {
        private readonly ILogger<CartService> _logger;
        private readonly NewUser _newUser;

        public CartService(ILogger<CartService> logger, NewUser newUser)
        {
            _newUser = newUser;
            _logger = logger;
        }
        public void CreateCart(Cart cart)
        {
            _newUser.Cart.Add(cart);
            _newUser.SaveChanges();
        }
        public Cart GetCurrentCart(int personid)
        {
            var thisCart = _newUser.Cart
                .FirstOrDefault(e => e.Personid == personid);
                return thisCart;
        }
        public void KillCart(int cartid)
        {
            var product = _newUser.Cart.FirstOrDefault(e => e.CartID == cartid);
            _newUser.Cart.Remove(product);
            _newUser.SaveChanges();
        }
    }
}