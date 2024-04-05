defmodule AnonMessages.MessagingFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `AnonMessages.Messaging` context.
  """

  @doc """
  Generate a message.
  """
  def message_fixture(attrs \\ %{}) do
    {:ok, message} =
      attrs
      |> Enum.into(%{
        content: "some content"
      })
      |> AnonMessages.Messaging.create_message()

    message
  end
end
