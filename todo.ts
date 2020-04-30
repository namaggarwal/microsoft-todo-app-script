class ToDo {
  static BASE_URL: string = 'https://outlook.office.com/api/v2.0/me'

  // eslint-disable-next-line camelcase
  private readonly fetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp

  private readonly accessToken: string

  // eslint-disable-next-line camelcase
  constructor(fetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp, accessToken: string) {
    this.accessToken = accessToken;
    this.fetchApp = fetchApp;
  }

  static getAuthHeaders(accessToken: string) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }

  getAllFolders() {
    // eslint-disable-next-line camelcase
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: ToDo.getAuthHeaders(this.accessToken),
    };
    const response = this.fetchApp.fetch(`${ToDo.BASE_URL}/taskfolders`, options);
    return JSON.parse(response.getContentText());
  }

  createTask(folderID: string, taskSubject: string, date: string) {
    const data = {
      Subject: taskSubject,
      StartDateTime: {
        DateTime: date,
        TimeZone: 'Pacific Standard Time',
      },
      DueDateTime: {
        DateTime: date,
        TimeZone: 'Pacific Standard Time',
      },
    };

    // eslint-disable-next-line camelcase
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: ToDo.getAuthHeaders(this.accessToken),
      payload: JSON.stringify(data),
      method: 'post',
      contentType: 'application/json',
    };

    const response = this.fetchApp.fetch(`${ToDo.BASE_URL}/taskfolders('${folderID}')/tasks`, options);
    return JSON.parse(response.getContentText());
  }
}

export default ToDo;
