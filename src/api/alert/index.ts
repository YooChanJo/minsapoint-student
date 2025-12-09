import HTTPRequestAPI from "../http-request";

export interface BackendAlert {
  _id: string;
  recipientId: string;
  date: string;
  description: string;
  isRead: boolean;
}

const AlertAPI = {
  getCurrentUserAlerts: async (accessToken: string): Promise<BackendAlert[]> => {
    try {
      const response = await HTTPRequestAPI.private.get("/api/me/alert-log", accessToken);
      return response.data;
    } catch (e) {
      console.error("AlertsAPI getCurrentUserAlert Func: ", e);
      throw e;
    }
  },
  readAlert: async (id: string, accessToken: string) => {
    try {
      if (!id) throw new Error("Invalid alert id");
      const response = await HTTPRequestAPI.private.get(`/api/alert-log/read/${id}`, accessToken);
      return response.data;
    } catch (e) {
      console.error("AlertsAPI readAlert Func: ", e);
      throw e;
    }
  },
};

export default AlertAPI;
