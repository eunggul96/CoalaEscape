#include <iostream>
using namespace std;

class object{
public:
    //object�� x, y ��ǥ
    int x;
    int y;
    int width;
    string image; // image ����
    string name;
    bool opened;
    bool locked;
    void setWidth(int a){
        this->width = a;
    }
    void lock(){
        this->locked = true;
    }
    void onClick(string name){
        if(name =="door"){
            if(isClosed()){
                open();
            }
            else if(isOpened()){
                //game clear;
            }
            else if(isLocked()){
                cout<<"���� ����ִ�";
            }
        }
        else{
            cout<<"���ش� �� �⵵?";
            showKeypad();
        
            }
            
        }
    
    
    void showKeypad(){
        cout<<"number"<<"2019";
        this->unlock();
        cout<<"�����ġ�� ������ �Ҹ��� ��ȴ�.";
    }

    
    
    void unlock(){
        this->locked = false;
    }
    
    bool isClosed(){
        if(this->opened ==true) return false;
        else return  true;
    }
    void open(){
        this->opened = true;
    }
    bool isOpened(){
        if(opened==true) return true;
        else return false;
    }
    bool isLocked(){
        if(locked == true) return true;
        else return false;
    }
};


class game{
    public:
    string name;
    string image;
    int a;
    object door;
    object keypad;
    void createRoom(string name, string image){
        this->name = name;
        this->image = image;
        
    }
    object createDObject(string name, string image){
        this->door.name = name;
        this->door.image = image;
        return this->door;
    }
    
    object createKObject(string name, string image){
        this->keypad.name = name;
        this->keypad.image = image;
        return this->keypad;
    }
    void clear(){
        cout<<"���� Ŭ����";
    }
    
    void locateObject(object ob, int x, int y){
        ob = this->door;
        ob.x = x;
        ob.y = y;
    }
    
    void gamestart(){
        
        cout<<"��Ż�⿡ ���� ���� ȯ���մϴ�"<<endl;
        cout<<"���ش� 201~ ���ΰ���?."<<endl ;// 2010
        
        while(a != 2019){
        cout<< "��ȣ�� �Է��Ͻÿ�"<<endl;
            
        cin>>a;
        if(a!=2019)
         cout<<"Ʋ�Ƚ��ϴ� �ٽ� �õ����ּ���"<<endl;
        }
        
        cout<<"Ż�� ����";
        
    }
    
};


int main(){
    game room;
    room.createRoom("room", "���-1.png");
    room.door = room.createDObject("door", "��-������-����.png");
    room.door.setWidth(136);
    room.locateObject(room.door, 1049, 300);
    room.door.lock();
    
    room.createKObject("keypad", "����Ű-��.png");
    room.keypad.setWidth(50);
    room.locateObject(room.keypad, 930, 250);
    
    
    room.gamestart();
}