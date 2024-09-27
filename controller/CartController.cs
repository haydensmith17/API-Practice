using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;
using apiPractice.services;
using Microsoft.AspNetCore.Mvc;

namespace apiPractice.controller
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly CartService _cart;
        public CartController(ILogger<UserController> logger, CartService cartService)
        {
            _cart = cartService;
            _logger = logger;
        }

        [HttpPost("Cart")]
        public IActionResult GetCart([FromBody] Cart cart)
        {
            _cart.CreateCart(cart);
            return Ok("ok");
        }

        [HttpGet("showCart")]
        public IActionResult GetCurrentCart(int personid)
        {
            var currentCart = _cart.GetCurrentCart(personid);
            return Ok(currentCart);
        }
        [HttpDelete("delete")]
        public IActionResult Delete(int cartID)
        {
            _cart.KillCart(cartID);
            return Ok("Ok");
        }
    }
}