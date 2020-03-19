using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RecipesApp.API.Migrations
{
    public partial class AddedLikesAddToFavAndPublicIdToRecipePhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FavouriteRecipes",
                columns: table => new
                {
                    RecipeId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    DateLiked = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavouriteRecipes", x => new { x.UserId, x.RecipeId });
                    table.ForeignKey(
                        name: "FK_FavouriteRecipes_Recipes_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FavouriteRecipes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Likes",
                columns: table => new
                {
                    LikerId = table.Column<int>(nullable: false),
                    LikeeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Likes", x => new { x.LikerId, x.LikeeId });
                    table.ForeignKey(
                        name: "FK_Likes_Users_LikeeId",
                        column: x => x.LikeeId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Likes_Users_LikerId",
                        column: x => x.LikerId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FavouriteRecipes_RecipeId",
                table: "FavouriteRecipes",
                column: "RecipeId");

            migrationBuilder.CreateIndex(
                name: "IX_Likes_LikeeId",
                table: "Likes",
                column: "LikeeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FavouriteRecipes");

            migrationBuilder.DropTable(
                name: "Likes");
        }
    }
}
