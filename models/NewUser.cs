using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace apiPractice.models
{
    public partial class NewUser : DbContext
    {
        public NewUser(DbContextOptions<NewUser> options) : base(options)
        {
        }

        public virtual DbSet<UserPersons> User { get; set; }
        public virtual DbSet<BoardInfo> Board { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Card> Card { get; set; }
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<BoardAccessories> Accessory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPersons>(entity =>
            {

                entity.HasKey(e => e.Personid).HasName("newuser1_pkey");
                entity.ToTable("newuser1");
                entity.Property(e => e.Personid).HasColumnName("personid");
                entity.Property(e => e.Firstname)
                    .HasMaxLength(255)
                    .HasColumnName("firstname");
                entity.Property(e => e.Lastname)
                    .HasMaxLength(255)
                    .HasColumnName("lastname");
                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");
                entity.Property(e => e.City)
                    .HasMaxLength(255)
                    .HasColumnName("city");
                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");
                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");
            });
            modelBuilder.Entity<BoardInfo>(entity =>
           {
               entity.HasKey(e => e.Id).HasName("newboard_pkey");
               entity.ToTable("newboard");
               entity.Property(e => e.Id)
                   .HasColumnName("id");
               entity.Property(e => e.Name)
                   .HasMaxLength(255)
                   .HasColumnName("name");
               entity.Property(e => e.Price)
                   .HasMaxLength(255)
                   .HasColumnName("price");
               entity.Property(e => e.Size)
                   .HasMaxLength(255)
                   .HasColumnName("size");
               entity.Property(e => e.Description)
                   .HasMaxLength(1500)
                   .HasColumnName("description");
               entity.Property(e => e.Image)
                   .HasMaxLength(1500)
                   .HasColumnName("image");
               entity.Property(e => e.CreatedOn)
                   .HasColumnType("timestamp without time zone")
                   .HasColumnName("created on");
               entity.Property(e => e.UpdatedOn)
                   .HasColumnType("timestamp without time zone")
                   .HasColumnName("updated on");
               entity.Property(e => e.Manufacturer)
                   .HasMaxLength(255)
                   .HasColumnName("manufacturer");
           });
            modelBuilder.Entity<Cart>(entity =>
       {
           entity.HasKey(e => e.CartID).HasName("cart_pkey");

           entity.ToTable("cart");

           entity.Property(e => e.CartID).HasColumnName("cartid");
           entity.Property(e => e.Personid).HasColumnName("personid");
           entity.Property(e => e.Id).HasColumnName("id");
           entity.Property(e => e.AccessoryId).HasColumnName("accessoryid");

           entity.HasOne(d => d.UserPersons)
               .WithMany(p => p.Carts)
               .HasForeignKey(d => d.Personid)
               .HasConstraintName("cart_personid_pkey");

           entity.HasOne(d => d.BoardInfo)
               .WithMany(p => p.Carts)
               .HasForeignKey(d => d.Id)
               .HasConstraintName("cart_id_fkey");

            entity.HasOne(d => d.BoardAccessories)
                .WithMany(p => p.Carts)
                .HasForeignKey(d => d.AccessoryId)
                .HasConstraintName("cart_accessoryid_pkey");

           entity.Property(e => e.CreatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("createdon");
           entity.Property(e => e.UpdatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("updatedon");

       });
            modelBuilder.Entity<Card>(entity =>
       {
           entity.HasKey(e => e.CardID).HasName("card_pkey");
           entity.ToTable("card");

           entity.Property(e => e.CardID).HasColumnName("cardid");
           entity.Property(e => e.Personid).HasColumnName("personid");

           entity.HasOne(d => d.UserPersons)
               .WithMany(p => p.Cards)
               .HasForeignKey(d => d.Personid)
               .HasConstraintName("card_personid_pkey");

           entity.Property(e => e.CreatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("createdon");
           entity.Property(e => e.UpdatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("updatedon");

           entity.Property(e => e.CardNumber)
               .HasMaxLength(255)
               .HasColumnName("cardnumber");
           entity.Property(e => e.ExpDate)
               .HasMaxLength(255)
               .HasColumnName("expdate");
           entity.Property(e => e.CVV).HasColumnName("cvv");
       });
            modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.AddressID).HasName("address_pkey");
            entity.ToTable("address");

            entity.Property(e => e.AddressID).HasColumnName("addressid");
            entity.Property(e => e.Personid).HasColumnName("personid");

            entity.HasOne(d => d.UserPersons)
                .WithMany(p => p.Addresses)
                .HasForeignKey(d => d.Personid)
                .HasConstraintName("address_personid_pkey");

            entity.Property(e => e.CreatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("createdon");
            entity.Property(e => e.UpdatedOn)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("updatedon");

            entity.Property(e => e.StreetAddress)
                .HasMaxLength(250)
                .HasColumnName("streetaddress");
            entity.Property(e => e.City)
                .HasMaxLength(250)
                .HasColumnName("city");
            entity.Property(e => e.StateOrigin)
                .HasMaxLength(250)
                .HasColumnName("stateorigin");
            entity.Property(e => e.ZIP)
                .HasMaxLength(16)
                .HasColumnName("zip");
            entity.Property(e => e.Country)
                .HasMaxLength(250)
                .HasColumnName("country");
        });
modelBuilder.Entity<BoardAccessories>(entity =>
           {

               entity.HasKey(e => e.AccessoryId).HasName("boardaccessories_pkey");
               entity.ToTable("boardaccessories");
               entity.Property(e => e.AccessoryId)
                   .HasColumnName("accessoryid");
               entity.Property(e => e.Name)
                   .HasMaxLength(255)
                   .HasColumnName("name");
               entity.Property(e => e.Price)
                   .HasMaxLength(255)
                   .HasColumnName("price");
               entity.Property(e => e.Description)
                   .HasMaxLength(1500)
                   .HasColumnName("description");
               entity.Property(e => e.Image)
                   .HasMaxLength(1500)
                   .HasColumnName("image");
               entity.Property(e => e.Manufacturer)
                   .HasMaxLength(255)
                   .HasColumnName("manufacturer");
           });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }

}
