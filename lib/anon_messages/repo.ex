defmodule AnonMessages.Repo do
  use Ecto.Repo,
    otp_app: :anon_messages,
    adapter: Ecto.Adapters.Postgres
end
