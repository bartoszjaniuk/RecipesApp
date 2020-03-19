using Microsoft.EntityFrameworkCore.Migrations;

namespace RecipesApp.API.Migrations
{
    public partial class AddedPublicIdToRecipePhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "RecipePhotos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "RecipePhotos");
        }
    }
}
