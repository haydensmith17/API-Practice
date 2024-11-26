using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;

namespace apiPractice.Interface
{
    public interface ICardService
    {
        void CreateCard (Card card);
    }
}