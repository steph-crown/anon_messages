defmodule AnonMessages.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :content, :string
      add :recipient_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:messages, [:recipient_id])
  end
end
