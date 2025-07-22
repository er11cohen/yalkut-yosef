export interface TitleObj {
	id: number;
	title: string;
}

export interface BookTitle extends TitleObj {
	bookSubTitles: TitleObj[];
}

export interface SelectedChapter {
	bookTitle: BookTitle;
	bookSubtitleIndex: number;
}

