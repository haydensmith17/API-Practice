using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.Interface;
using apiPractice.models;

namespace apiPractice.services
{
    public class CardService : ICardService
    {
        private readonly NewUser _newUser;
        private readonly ILogger<CardService> _logger;
        public CardService(ILogger<CardService> logger, NewUser newUser)
        {
            _logger = logger;
            _newUser = newUser;
        }

        public void CreateCard(Card card)
        {
            _newUser.Card.Add(card);
            _newUser.SaveChanges();
        }
    }
}