import {
  Pixiv_Client,
  Pixiv_User_Detail,
  Pixiv_Illust_Search,
  Pixiv_User_Search,
  Pixiv_Illust,
  Pixiv_Comment_Search,
  Pixiv_Trend_Tags,
  Pixiv_Novel_Search,
  Pixiv_Auto_Complete,
  Pixiv_Bookmark_Detail,
  Pixiv_Bookmark_Search,
  Ugoira_Meta_Data,
  Pixiv_Manga_Search
} from './Pixiv_Types'
import {
  PixivClient,
  PixivIllustSearch,
  PixivParams,
  PixivFetchOptions,
  PixivBookmarkDetail,
  PixivBookmarkSearch,
  PixivUserDetail,
  PixivUserSearch,
  PixivIllust,
  PixivCommentSearch,
  PixivNovelSearch,
  PixivAutoComplete,
  UgoiraMetaData,
  PixivMangaSearch,
  PixivTrendTags
} from './PixivTypes'
export default class PixivApp<B extends boolean> {
  camelcaseKeys: B
  private username
  private password
  private refreshToken
  private nextUrl
  private auth
  private once
  constructor(
    username?: string,
    password?: string,
    options?: {
      camelcaseKeys?: B
    }
  )
  login(
    username?: string,
    password?: string
  ): Promise<B extends true ? PixivClient : Pixiv_Client>
  authInfo(): B extends true ? PixivClient : Pixiv_Client
  hasNext(): boolean
  next(): Promise<any>
  nextQuery(): undefined | string
  makeIterable(resp: any): AsyncIterable<any>
  userDetail(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivUserDetail : Pixiv_User_Detail>
  userIllusts(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch[] : Pixiv_Illust_Search[]>
  userFollowAdd(id: number, params?: PixivParams): Promise<unknown>
  userFollowDelete(id: number, params?: PixivParams): Promise<unknown>
  userBookmarksIllust(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  userFollowing(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivUserSearch : Pixiv_User_Search>
  userFollower(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivUserSearch : Pixiv_User_Search>
  userMypixiv(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivUserSearch : Pixiv_User_Search>
  userList(id: number, params?: PixivParams): Promise<unknown>
  illustDetail(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivIllust : Pixiv_Illust>
  illustNew(
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  illustFollow(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  illustComments(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivCommentSearch : Pixiv_Comment_Search>
  illustRelated(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  illustRecommended(
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  illustRecommendedNologin(
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  illustRanking(
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  trendingTagsIllust(
    params?: PixivParams
  ): Promise<B extends true ? PixivTrendTags : Pixiv_Trend_Tags>
  searchIllust(
    word: string,
    params?: PixivParams
  ): Promise<B extends true ? PixivIllustSearch : Pixiv_Illust_Search>
  searchNovel(
    word: string,
    params?: PixivParams
  ): Promise<B extends true ? PixivNovelSearch : Pixiv_Novel_Search>
  searchUser(
    word: string,
    params?: PixivParams
  ): Promise<B extends true ? PixivUserSearch : Pixiv_User_Search>
  searchAutoComplete(
    word: string
  ): Promise<B extends true ? PixivAutoComplete : Pixiv_Auto_Complete>
  illustBookmarkDetail(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? PixivBookmarkDetail : Pixiv_Bookmark_Detail>
  illustBookmarkAdd(id: number, params?: PixivParams): Promise<unknown>
  illustBookmarkDelete(id: number, params?: PixivParams): Promise<unknown>
  userBookmarkTagsIllust(
    params?: PixivParams
  ): Promise<B extends true ? PixivBookmarkSearch : Pixiv_Bookmark_Search>
  novelRecommended(
    params?: PixivParams
  ): Promise<B extends true ? PixivNovelSearch : Pixiv_Novel_Search>
  mangaNew(params?: PixivParams): Promise<any>
  mangaRecommended(
    params?: PixivParams
  ): Promise<B extends true ? PixivMangaSearch : Pixiv_Manga_Search>
  novelRecommendedNologin(
    params?: PixivParams
  ): Promise<B extends true ? PixivNovelSearch : Pixiv_Novel_Search>
  novelNew(
    params?: PixivParams
  ): Promise<B extends true ? PixivNovelSearch : Pixiv_Novel_Search>
  ugoiraMetaData(
    id: number,
    params?: PixivParams
  ): Promise<B extends true ? UgoiraMetaData : Ugoira_Meta_Data>
  fetch(target: string, options?: PixivFetchOptions): Promise<any>
  private _get
}
