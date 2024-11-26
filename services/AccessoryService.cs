using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;

namespace apiPractice.services
{
    public class AccessoryService
    {
        private readonly NewUser _newUser;
        public AccessoryService(NewUser newUser)
        {
            _newUser = newUser;
        }

        public void AddNewAccessory(BoardAccessories accessory)
        {
            _newUser.Accessory.Add(accessory);
            _newUser.SaveChanges();
        }
        public BoardAccessories GetAccessory(int accessoryid)
        {
            var accessory = _newUser.Accessory
                .FirstOrDefault(e => e.AccessoryId == accessoryid);
                return accessory;
        }

        public List<BoardAccessories> GetAllAccessories()
        {
            var accessories = _newUser.Accessory.ToList();
            return accessories;
        }
    }
}