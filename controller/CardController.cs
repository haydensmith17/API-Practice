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
    public class CardController : ControllerBase
    {
        private readonly CardService _cardService;
        public CardController(CardService cardService)
        {
            _cardService = cardService;
        }

        [HttpPost("card")]
        public IActionResult GetCard([FromBody] Card card)
        {
            _cardService.CreateCard(card);
            return Ok("ok");
        }
    }
}