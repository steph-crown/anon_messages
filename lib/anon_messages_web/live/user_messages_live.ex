defmodule AnonMessagesWeb.UserMessagesLive do
  alias AnonMessages.Messaging
  use AnonMessagesWeb, :live_view

  def render(assigns) do
    ~H"""
    <div
      phx-update="ignore"
      phx-hook="UserMessages"
      id="user-messages"
      class="h-full"
      data-userid={assigns.current_user.id}
    >
    </div>
    """
  end

  defp struct_to_map(struct) do
    Map.from_struct(struct) |> Map.delete(:__meta__)
  end

  def handle_event("get_messages", _, socket) do
    user_id = socket.assigns.current_user.id
    messages = Messaging.get_messages_by_recipient_id(user_id)

    # form list of maps from list of structs.
    messages = Enum.map(messages, &struct_to_map/1)

    {:reply, %{"messages" => messages}, socket}
  end

  def mount(_params, _session, socket) do
    {:ok, socket}
  end
end
