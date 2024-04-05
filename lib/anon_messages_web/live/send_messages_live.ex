defmodule AnonMessagesWeb.SendMessagesLive do
  alias AnonMessages.Messaging
  use AnonMessagesWeb, :live_view

  def render(assigns) do
    ~H"""
    <div
      id="send-messages"
      phx-hook="SendMessages"
      phx-update="ignore"
      data-recipientemail={assigns.recipient.email}
      data-recipientid={assigns.recipient.id}
    >
    </div>
    """
  end

  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  def handle_event("send_message", message_params, socket) do
    case Messaging.create_message(message_params) do
      {:ok, _message} ->
        {:noreply, socket |> put_flash(:info, "Message sent!")}

      {:error, _changeset} ->
        {:noreply, socket |> put_flash(:error, "Oops, something went wrong!")}
    end
  end
end
