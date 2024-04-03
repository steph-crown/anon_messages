defmodule AnonMessagesWeb.UserMessagesLive do
  use AnonMessagesWeb, :live_view

  def render(assigns) do
    ~H"""
    <div phx-update="ignore" phx-hook="UserMessages" id="user-messages"></div>
    """
  end

  def mount(_params, _session, socket) do
    {:ok, socket}
  end
end
