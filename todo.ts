class ToDo {
  static BASE_URL: string = 'https://outlook.office.com/api/v2.0/me'

  private readonly fetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp
  private readonly accessToken: string

  constructor(fetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp, accessToken: string) {
    this.accessToken = accessToken
    this.fetchApp = fetchApp
  }

  static getAuthHeaders(accessToken: string) {
    return {
      'Authorization': `Bearer ${accessToken}`
    };
  }

  getAllFolders() {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: ToDo.getAuthHeaders(this.accessToken)
    }
    const response = this.fetchApp.fetch(`${ToDo.BASE_URL}/taskfolders`, options)
    return JSON.parse(response.getContentText())
  }

}

export default ToDo;